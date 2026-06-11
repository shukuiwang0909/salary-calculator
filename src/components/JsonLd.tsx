interface Props {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Serialize data as JSON-LD. Replaces `<` with `<` so any user-provided
 * string (e.g. an FAQ answer containing code) can never break out of the
 * surrounding <script> tag.
 */
export default function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}