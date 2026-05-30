export default {
  name: 'article',
  title: 'Articol News',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: [
          { title: 'Anunțuri / Announcements', value: 'announcements' },
          { title: 'Conferințe / Conferences', value: 'conferences' },
          { title: 'Realizări / Achievements', value: 'achievements' },
          { title: 'Behind the Scenes', value: 'behind-the-scenes' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Data publicării',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Imagine principală (opțional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Dacă nu pui imagine, apare emoji-ul de mai jos.',
    },
    {
      name: 'emoji',
      title: 'Emoji fallback',
      type: 'string',
      initialValue: '📢',
      description: 'Afișat dacă nu există imagine. Ex: 📢 🌍 🏆 🎬',
    },

    // ---- ROMÂNĂ ----
    {
      name: 'title_ro',
      title: '🇷🇴 Titlu (RO)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug_ro',
      title: '🇷🇴 Slug URL (RO)',
      type: 'slug',
      options: {
        source: 'title_ro',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt_ro',
      title: '🇷🇴 Rezumat scurt (RO)',
      type: 'text',
      rows: 3,
      description: 'Apare pe lista de articole. ~150 caractere.',
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'body_ro',
      title: '🇷🇴 Conținut (RO)',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },

    // ---- ENGLISH ----
    {
      name: 'title_en',
      title: '🇬🇧 Title (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug_en',
      title: '🇬🇧 URL Slug (EN)',
      type: 'slug',
      options: {
        source: 'title_en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt_en',
      title: '🇬🇧 Short excerpt (EN)',
      type: 'text',
      rows: 3,
      description: 'Shown on article list. ~150 characters.',
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'body_en',
      title: '🇬🇧 Body (EN)',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    },
  ],

  orderings: [
    {
      title: 'Cele mai noi',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],

  preview: {
    select: {
      title: 'title_ro',
      subtitle: 'category',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, subtitle, media, date }) {
      const d = date ? new Date(date).toLocaleDateString('ro-RO') : ''
      return {
        title: title || '(fără titlu)',
        subtitle: `${subtitle || ''} · ${d}`,
        media,
      }
    },
  },
}
