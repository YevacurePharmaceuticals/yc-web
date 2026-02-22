import { useEffect } from 'react';

export default function MetaTags({ title, description }) {
  useEffect(() => {
    document.title = `${title} | Yevacure Pharmaceutical`;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
