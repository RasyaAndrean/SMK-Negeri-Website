// Humorous Error Page
'use client';

import HumorousError from '../components/HumorousError';

export default function HumorousErrorPage() {
  // Mock retry function
  const handleRetry = () => {
    alert('Retrying... but this is just a demo!');
  };

  // Render the humorous error component
  const errorComponent = HumorousError({
    message:
      "This is a demo error page. Don't worry, our hamster-powered servers are working on it!",
    onRetry: handleRetry,
  });

  return errorComponent;
}
