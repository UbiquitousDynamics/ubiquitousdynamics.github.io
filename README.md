# Ubiquitous Dynamics website

A dependency-free static site for GitHub Pages, redesigned around Ubiquitous Dynamics' eco-pragmatist position.

## Structure

- `index.html` - homepage with hero, research questions and CTA
- `contact.html` - accessible contact form UI
- `static/styles.css` - shared layouts and responsive styles
- `script.js` - shared navigation and footer components

`projects.html` remains as a compatibility redirect to the homepage project list.

## Homepage project catalog

`data/projects.json` contains the public-facing copy for the current projects and the laboratory,
including short presentations of private projects. It is public website content;
keep credentials, source code and internal documentation out of this file.
Private project cards lead to Contact instead of inaccessible repository URLs.

After editing the catalog, regenerate the static homepage with:

```sh
python scripts/build_projects.py
```

The generated cards work without JavaScript or GitHub credentials. This renders
the local catalog; it does not automatically discover or sync GitHub repositories.

## Before launch

The contact form opens the visitor's default email client with a prefilled message addressed to ubiquitous.dynamics@gmail.com.

Verified public references currently used by the site are the Ubiquitous Dynamics GitHub profile and the README of the Helios AI Jetson framework. The laboratory motto is “Build Yourself”.

The site deliberately contains no fabricated metrics, partners, funding claims, client names or staff identities.
