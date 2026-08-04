# Birthday & Baptism Invitation Site

## 1. Add your photos
Drop your images into the `images/` folder using these EXACT filenames
(same folder as this README). Any file that's missing will just show a
broken-image icon until you add it — the rest of the page still works.

| Filename            | Photo                     |
|---------------------|---------------------------|
| hero-baby.jpg        | Main hero photo (top of page) |
| month-00.jpg         | Newborn                   |
| month-01.jpg         | 1 month old                |
| month-02.jpg         | 2 months old                |
| month-03.jpg         | 3 months old                |
| month-04.jpg         | 4 months old                |
| month-05.jpg         | 5 months old                |
| month-06.jpg         | 6 months old                |
| month-07.jpg         | 7 months old                |
| month-08.jpg         | 8 months old                |
| month-09.jpg         | 9 months old                |
| month-10.jpg         | 10 months old               |
| month-11.jpg         | 11 months old               |
| month-12.jpg         | 12 months old (1st birthday) |

Any common image format works (.jpg, .jpeg, .png, .webp) — just keep the
filename the same, or update the `src="images/..."` path in `index.html`
to match your file extension.

Only have 12 photos instead of 13? Delete the `<article class="month-card">`
block for "Newborn" in `index.html` (near the top of the `<main class="timeline">`
section) and the rest will still flow correctly.

## 2. Add background music
Drop an MP3 into the `audio/` folder named exactly:

```
audio/background-music.mp3
```

That's it — the page now opens with a "Tap to Open" cover screen. The moment
someone taps it, the invitation reveals itself AND the music starts at the
same time — so it feels like autoplay even though real browsers never allow
true autoplay-with-sound before any interaction (that's a browser-level rule,
not something any site can bypass). There's also a small round speaker icon
in the top-left corner (matching the sky-blue theme) so visitors can
mute/unmute afterward.

Want to change the cover screen's wording? Edit the `entry-eyebrow` ("You're
Invited") and `entry-tap` ("Tap to Open") text near the top of `index.html`.

Want a different filename or format (.mp3, .m4a, .ogg all work)? Update the
`src="audio/background-music.mp3"` line near the top of `index.html`.

## 3. Fill in the event details
Open `index.html` and search for these placeholders, then replace with your
real info:

- `[Child's Name]` — appears twice (script heading + hero photo alt text)
- `[Month Day, Year — Time]` — date & time, near the bottom in the `<footer class="details">` section
- `[Venue Name]` / `[Street Address, City]` — location
- `[Name] — [Phone Number]` — RSVP contact

## 3. View it
Just open `index.html` in any browser — no build step, no server required.
Works on phone and desktop; scroll down to reveal each month.

## File structure
```
birthday-invitation/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/        ← put your photos here
├── audio/         ← put background-music.mp3 here
└── README.md
```
