"""Render the public project catalog into the static homepage (no credentials)."""
import json
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def render(project):
    preview = ''
    if project.get('image'):
        background = project.get('image_background', '#ffffff')
        if not re.fullmatch(r'#[0-9a-fA-F]{6}', background):
            raise ValueError('Preview backgrounds must be hex colours.')
        source = escape(project['image'], quote=True)
        alt = escape(project['image_alt'], quote=True)
        preview = f'''<span class="project-preview preview-card" style="--preview-background: {background}"><span class="preview-stage"><img class="preview-backdrop" src="{source}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="preview-image" src="{source}" alt="{alt}" loading="lazy" decoding="async"></span></span>'''
    if project.get('about'):
        return f'''        <li>
          <div class="laboratory-description">
            <span class="project-meta"><span>{escape(project['name'])}</span><span>{escape(project['category'])}</span>{preview}</span>
            <div class="project-copy">
              <h3>{escape(project['title'])}</h3>
              <p class="project-context">{escape(project['summary'])}</p>
            </div>
          </div>
        </li>'''
    private = project['private']
    badge = f'<span class="project-status">{escape(project["status"])}</span>' if project.get('status') else ''
    href = 'contact.html' if private else project['url']
    if not private and not href.startswith('https://github.com/UbiquitousDynamics/'):
        raise ValueError('Public project links must point to the laboratory GitHub.')
    attrs = '' if private else ' target="_blank" rel="noreferrer"'
    status = 'Private repository · Contact us to learn more' if private else 'Explore the repository on GitHub'
    return f'''        <li>
          <a href="{escape(href, quote=True)}"{attrs}>
            <span class="project-meta"><span>{escape(project['name'])}</span><span>{escape(project['category'])}</span>{badge}{preview}</span>
            <div class="project-copy">
              <h3>{escape(project['title'])}</h3>
              <p class="project-context">{escape(project['summary'])}</p>
            </div>
          </a>
          <p class="project-links">{status}</p>
        </li>'''


def main():
    projects = json.loads((ROOT / 'data/projects.json').read_text(encoding='utf-8'))
    entries = '\n'.join(render(project) for project in projects)
    page = ROOT / 'index.html'
    source = page.read_text(encoding='utf-8')
    start = '      <!-- projects:start -->'
    end = '      <!-- projects:end -->'
    before, remaining = source.split(start, 1)
    _, after = remaining.split(end, 1)
    page.write_text(f'{before}{start}\n      <ol class="project-list">\n{entries}\n      </ol>\n{end}{after}', encoding='utf-8')
    print(f'Rendered {len(projects)} project cards.')


if __name__ == '__main__':
    main()
