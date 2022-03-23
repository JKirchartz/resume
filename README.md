# JKirchartz Resume Generator

After a recent redesign of my own resume proved difficult to maintain (using InDesign.)
I decided to Generate a PDF resume from markdown with pandoc, after stumbling upon [Ixxie's CV][1].
However, this did not align with my idealized design so instead I've overcomplicated everything in new and interesting ways.

## Usage

edit `src/resume.json` with your career history

ensure `src/index.hbs` and `src/plain.hbs` contain the relevant personal information

ensure `node` is installed with `npm` version `5.2.0` or better

run `npx grunt` to build the resume and make it ready to publish on [github-pages](https://pages.github.com/) or wherever you'd like.

The site's source code should be in the `docs/` directory.


## Colophon

* [Montserrat][5]
* [Font Awesome][6]


## Special Thanks

[Ixxie][2] for the [inspiration][1], [Sway][3] for the original [Latex/FontAwesome code][4]

[1]: https://github.com/ixxie/cv
[2]: https://github.com/ixxie/
[3]: https://github.com/sway/
[4]: https://coderwall.com/p/r67dyq/using-font-awesome-with-xe-latex
[5]: https://fonts.google.com/specimen/Montserrat
[6]: https://fontawesome.io
