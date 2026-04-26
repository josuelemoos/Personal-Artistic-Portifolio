# Artistic Portfolio

This document is the project baseline. It describes what the site includes, what is already developed, and stores the editable content that feeds the landing page.

To change texts, contact links, projects, or artworks:

1. Edit the `SITE_DATA` block below.
2. Run `node scripts/sync-content.js`.
3. Open `index.html` again or refresh the page.

## What Is Already Developed

- Static landing page with no external dependencies.
- Initial hero with a black background and a minimal cosmic atmosphere.
- Responsive artwork gallery section.
- Artwork lightbox: clicking an artwork opens the full image above the page without leaving the site or cropping the image.
- About section.
- Projects section with optional image and access link.
- Contact section with configurable links.
- Simple anchor navigation.
- Content centralized in the `SITE_DATA` block of this document.
- Original visual asset in `assets/cosmic-hero.png`, kept in the project for future use.
- Synchronization script in `scripts/sync-content.js`.

## Visual Direction

- Theme: cosmic minimalism with Lovecraft echoes, without literal horror excess.
- Main colors: abyssal black, dark petroleum green on hover, deep violet, bone gray, and small points of cold light.
- Interface: clean, quiet, spacious, and focused on the artwork.
- Texture: dark background, black header/hero, and thin borders.
- Typography: monospaced with an old typewriter mood while keeping a minimalist reading experience.
- Interaction: buttons use a dark green hover with a subtle mysterious glow.
- Gallery interaction: artwork cards open a full-screen preview using `object-fit: contain`, so images fit inside the viewport without being cropped. The preview can be closed with the close button, backdrop click, or `Esc`.

## Maintenance

- The site does not use a framework, so it can be hosted as static files.
- To add artworks, duplicate an item inside `works`.
- To add projects, duplicate an item inside `projects`.
- In projects, use `image` for the photo/cover, `link` for the access URL, and `linkLabel` for the button text.
- If an artwork does not have an image yet, leave `image` empty. The site renders a temporary minimalist visual block.
- If a project does not have an image or link yet, leave `image` or `link` empty. The site renders a temporary visual block and hides the button.

## SITE_DATA

Edit only the JSON between the markers.

<!-- SITE_DATA_START -->
{
  "meta": {
    "siteTitle": "JosuéLM Portfolio",
    "language": "en"
  },
  "artist": {
    "name": "Josué Lemos Mesquita",
    "role": "Artist and Comic Creator",
    "location": "Brazil",
    "shortBio": "I create visuals, characters, and worlds inspired by the unknown cosmic (and sea) fear, always trying to say something meaningful with the composition and art",
    "about": [
      "Hello there, I'm an Artist, in love with all kinds of art, and who also loves to draw since I was a kid. In my free time I love to read, study, and create new worlds and stories. Because of it, I created \"Ensombrecida\", my first comic, that is going to the second edition!",
      "Oh, and I almost forgot it: I'm a fan of Lovecraft, Fallout, and trash movies."
    ]
  },
  "hero": {
    "eyebrow": "Artistic portfolio",
    "title": "We are scared of the dark... until we turn on the lights",
    "description": "Selection of most recent of my pieces, enjoy !!!",
    "primaryAction": {
      "label": "See artworks",
      "href": "#artworks"
    },
    "secondaryAction": {
      "label": "Contact",
      "href": "#contact"
    }
  },
  "works": [
    {
      "title": "The thing below the harbor",
      "year": "2026",
      "medium": "Digital art",
      "description": "Investigation of light forms, painting, and composition.",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczMYdbyVPC3nbNaV0-WcIr_QaX4L7pX_Vmjjw6nl9h_vhJacHqxuIrvFp0ovFLBG_SS8cEea_7u7jcF2zE4Y6iN7RUfm0nhLpBBJUNv_0GapjNYRAyeFwjbBC5akvyEf2KXE09reCdCRkEYjdx_9W0srEw=w1316-h926-s-no-gm?authuser=0"
    },
    {
      "title": "King of the Octopus Realm",
      "year": "2026",
      "medium": "Digital art and Character Design",
      "description": "A king afraid of the future of his realm, the thing that is below him is starting to wake up.",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczMSZieLXxS0FDUtYrN8ZPg-ZVSsOoxSRr14AujQMK0Dr40YXRK9TvbaJtKNbkVyHLcH06c1rUYqWq9cUV7GQAJi1ZzPZXArJygy9Gg9-fwo4dvSpBjIpzNH-mvQV1dlRFi3xzarMnqAfmQzQG5klku11Q=w653-h926-s-no-gm?authuser=0"
    },
    {
      "title": "The Octopus Realm warrior",
      "year": "2026",
      "medium": "Digital art and composition",
      "description": "Composition and action study",
      "image": "https://lh3.googleusercontent.com/pw/AP1GczNmWgBkKeGQlIi7a0f-Wpc5TrJqW0_w2-ICBcBgMaKopD434gQ_YG2ne0hCJiRbmpSdUvCC8-zElx98klF0l1AsbW4cUQArBIZQCd3KMdFQM5WPjsZXdwyhjyz-D4OLoma1aKCCkVHefyd1UGquXwCGBg=w653-h926-s-no-gm?authuser=0"
    }
  ],
  "projects": [
    {
      "title": "ENSOMBRECIDA: aboard",
      "status": "Published",
      "description": "My first comic, a dark sea-bound story now available as an ebook on Amazon.",
      "image": "assets/ensombrecida-cover.jpg",
      "link": "https://www.amazon.com.br/ENSOMBRECIDA-abordo-Josu%C3%A9-Lemos-Mesquita-ebook/dp/B0FZF7KZNW",
      "linkLabel": "Read on Amazon"
    },
    {
      "title": "Cosmic Series",
      "status": "In development",
      "description": "A set of visual pieces about imaginary astronomy, ruins, and silence.",
      "image": "",
      "link": "",
      "linkLabel": "Open project"
    },
    {
      "title": "Study Archive",
      "status": "Ongoing",
      "description": "A record of explorations in palette, texture, composition, and visual storytelling.",
      "image": "",
      "link": "",
      "linkLabel": "Open project"
    }
  ],
  "contact": {
    "intro": "For invitations, commissions, collaborations, or conversations about art, get in touch through the channels below.",
    "email": "seuemail@exemplo.com",
    "links": [
      {
        "label": "Instagram",
        "href": "https://instagram.com/seuusuario"
      },
      {
        "label": "Behance",
        "href": "https://behance.net/seuusuario"
      }
    ]
  }
}
<!-- SITE_DATA_END -->
