import { Helmet } from 'react-helmet-async';

function MetaTags({
  title = '',
  description = '',
  image = '',
  name = '',
}: {
  title: string;
  description: string;
  image: string;
  name: string;
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={window.location.href} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:alt" content={`Image of ${title} site`} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

export default MetaTags;
