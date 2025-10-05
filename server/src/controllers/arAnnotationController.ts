import { Request, Response } from 'express';

// Mock AR annotation data with comprehensive contextual information
const arAnnotations = [
  {
    id: 1,
    collaboration_id: 1,
    position: {
      x: 1.5,
      y: 2.3,
      z: 0.8,
    },
    type: 'measurement',
    measurement_type: 'distance',
    value: 2.5,
    unit: 'meters',
    accuracy: 95.5,
    environmental_context: 'indoor_lab',
    collaborative_context: 'network_cabling',
    device_orientation: {
      x: 0.1,
      y: 0.5,
      z: 0.2,
    },
    timestamp: '2023-10-16T14:30:00Z',
    created_by: {
      id: 101,
      name: 'Andi Saputra',
    },
    notes:
      'Measured distance between server rack and wall for cable management',
    tags: ['networking', 'infrastructure', 'cabling'],
    related_annotations: [2],
    status: 'verified',
  },
  {
    id: 2,
    collaboration_id: 1,
    position: {
      x: 3.2,
      y: 1.1,
      z: 1.4,
    },
    type: 'label',
    text: 'Main Server Rack',
    accuracy: 98.2,
    environmental_context: 'indoor_lab',
    collaborative_context: 'network_cabling',
    device_orientation: {
      x: 0.3,
      y: 0.7,
      z: 0.1,
    },
    timestamp: '2023-10-16T14:35:00Z',
    created_by: {
      id: 102,
      name: 'Budi Prasetyo',
    },
    notes: 'Primary server rack containing core network equipment',
    tags: ['servers', 'networking', 'equipment'],
    related_annotations: [1],
    status: 'proposed',
  },
];

export const getAllAnnotations = async (req: Request, res: Response) => {
  try {
    const { collaboration_id } = req.params;
    const collaborationId = parseInt(collaboration_id, 10);

    // Filter annotations for this collaboration
    const annotations = arAnnotations.filter(
      a => a.collaboration_id === collaborationId
    );

    res.json(annotations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching AR annotations',
      },
    });
  }
};

export const getAnnotationById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const annotationId = parseInt(id, 10);

    const annotation = arAnnotations.find(a => a.id === annotationId);

    if (!annotation) {
      return res.status(404).json({
        error: {
          code: 'ANNOTATION_NOT_FOUND',
          message: 'AR annotation not found',
        },
      });
    }

    // Include related annotations data
    const relatedAnnotations =
      annotation.related_annotations
        ?.map(relatedId => arAnnotations.find(a => a.id === relatedId))
        .filter(Boolean) || [];

    res.json({
      ...annotation,
      related_annotations_details: relatedAnnotations,
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching AR annotation',
      },
    });
  }
};

export const createAnnotation = async (req: Request, res: Response) => {
  try {
    const { collaboration_id } = req.params;
    const collaborationId = parseInt(collaboration_id, 10);
    const {
      position,
      type,
      measurement_type,
      value,
      unit,
      text,
      accuracy,
      environmental_context,
      collaborative_context,
      device_orientation,
      notes,
      tags,
    } = req.body;

    const userId = (req as any).user.id;
    const userName = (req as any).user.name || 'User';

    // Validate input
    if (!position || !type) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Position and type are required',
        },
      });
    }

    // Create new annotation
    const newAnnotation = {
      id: arAnnotations.length + 1,
      collaboration_id: collaborationId,
      position,
      type,
      measurement_type: measurement_type || null,
      value: value || null,
      unit: unit || null,
      text: text || null,
      accuracy: accuracy || 0,
      environmental_context: environmental_context || 'unknown',
      collaborative_context: collaborative_context || 'general',
      device_orientation: device_orientation || { x: 0, y: 0, z: 0 },
      timestamp: new Date().toISOString(),
      created_by: {
        id: userId,
        name: userName,
      },
      notes: notes || '',
      tags: tags || [],
      related_annotations: [],
      status: 'draft',
    };

    arAnnotations.push(newAnnotation);

    res.status(201).json(newAnnotation);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while creating AR annotation',
      },
    });
  }
};

export const updateAnnotation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const annotationId = parseInt(id, 10);
    const { position, text, value, status, notes, tags, related_annotations } =
      req.body;

    // Find annotation
    const annotationIndex = arAnnotations.findIndex(a => a.id === annotationId);

    if (annotationIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'ANNOTATION_NOT_FOUND',
          message: 'AR annotation not found',
        },
      });
    }

    // Check if user is the creator
    const userId = (req as any).user.id;
    if (arAnnotations[annotationIndex].created_by.id !== userId) {
      return res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'Only the creator can update this annotation',
        },
      });
    }

    // Update annotation
    if (position) arAnnotations[annotationIndex].position = position;
    if (text) arAnnotations[annotationIndex].text = text;
    if (value) arAnnotations[annotationIndex].value = value;
    if (status) arAnnotations[annotationIndex].status = status;
    if (notes) arAnnotations[annotationIndex].notes = notes;
    if (tags) arAnnotations[annotationIndex].tags = tags;
    if (related_annotations)
      arAnnotations[annotationIndex].related_annotations = related_annotations;
    arAnnotations[annotationIndex].timestamp = new Date().toISOString();

    res.json(arAnnotations[annotationIndex]);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while updating AR annotation',
      },
    });
  }
};

export const deleteAnnotation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const annotationId = parseInt(id, 10);

    // Find annotation
    const annotationIndex = arAnnotations.findIndex(a => a.id === annotationId);

    if (annotationIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'ANNOTATION_NOT_FOUND',
          message: 'AR annotation not found',
        },
      });
    }

    // Check if user is the creator or admin
    const userId = (req as any).user.id;
    const userRole = (req as any).user.role;
    if (
      arAnnotations[annotationIndex].created_by.id !== userId &&
      userRole !== 'admin'
    ) {
      return res.status(403).json({
        error: {
          code: 'FORBIDDEN',
          message: 'Only the creator or admin can delete this annotation',
        },
      });
    }

    // Remove annotation
    arAnnotations.splice(annotationIndex, 1);

    res.json({
      message: 'AR annotation deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while deleting AR annotation',
      },
    });
  }
};

export const getAnnotationsByTag = async (req: Request, res: Response) => {
  try {
    const { tag } = req.params;

    // Filter annotations by tag
    const annotations = arAnnotations.filter(
      annotation => annotation.tags && annotation.tags.includes(tag)
    );

    res.json(annotations);
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while fetching AR annotations by tag',
      },
    });
  }
};

export const verifyAnnotation = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const annotationId = parseInt(id, 10);

    // Find annotation
    const annotationIndex = arAnnotations.findIndex(a => a.id === annotationId);

    if (annotationIndex === -1) {
      return res.status(404).json({
        error: {
          code: 'ANNOTATION_NOT_FOUND',
          message: 'AR annotation not found',
        },
      });
    }

    // Update status to verified
    arAnnotations[annotationIndex].status = 'verified';
    arAnnotations[annotationIndex].timestamp = new Date().toISOString();

    res.json({
      message: 'AR annotation verified successfully',
      annotation: arAnnotations[annotationIndex],
    });
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'SERVER_ERROR',
        message: 'An error occurred while verifying AR annotation',
      },
    });
  }
};
