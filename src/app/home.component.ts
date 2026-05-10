import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sections, Student } from './models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="page-shell">
      <section class="hero">
        <div>
          <p class="eyebrow">USTHS 1987 Yearbook</p>
          <h1>Find your batchmates and advisers below.</h1>
          <p class="hero-copy">
            Type any name to find matching people across all sections.
          </p>
        </div>

        <label class="search-field">
          <span class="search-label">Search names</span>
          <input
            type="search"
            [value]="query()"
            (input)="setQuery($any($event.target).value)"
            placeholder="e.g. John Doe, Mr. Sanchez"
          />
        </label>
      </section>

      <section class="results" *ngIf="query().trim().length > 0; else sectionListing">
        <div class="results-header">
          <h2>Results for "{{ query() }}"</h2>
          <p *ngIf="results().length === 0" class="no-results">
            No matching names found.
          </p>
        </div>

        <div class="result-grid">
          <article class="result-card" *ngFor="let item of results()">
            <div class="photo-frame">
              <img [src]="item.image" [alt]="item.label" />
            </div>
            <div class="result-meta">
              <p class="result-label">{{ item.label }}</p>
              <p class="result-subtitle">{{ item.role }} • {{ item.section }}</p>
            </div>
          </article>
        </div>
      </section>

      <ng-template #sectionListing>
        <section class="sections">
          <div class="results-header">
            <h2>Browse sections</h2>
          </div>

          <div class="section-grid">
            <a [routerLink]="['/section', section.id]" class="section-card"
              *ngFor="let section of sections">
              <strong>{{ section.title }}</strong>
              <p>Adviser: {{ section.adviser.name }}</p>
              <p>{{ section.students.length }} students</p>
            </a>
          </div>
        </section>
      </ng-template>
    </main>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class HomeComponent {
  readonly query = signal('');
  readonly sections = sections;

  readonly results = computed(() => {
    const queryValue = this.query().trim().toLowerCase();
    if (!queryValue) {
      return [];
    }

    const matches = [] as Array<{
      name: string;
      section: string;
      role: string;
      image: string;
      label: string;
    }>;

    for (const section of sections) {
      if (section.adviser.name.toLowerCase().includes(queryValue)) {
        matches.push({
          name: section.adviser.name,
          section: section.title,
          role: 'Adviser',
          image: `photos/${section.id}/${section.adviser.image}`,
          label: `${section.adviser.name} — Adviser`
        });
      }

      for (const officer of section.officers) {
        if (officer.name.toLowerCase().includes(queryValue)) {
          const student = section.students.find((s: Student) => s.name === officer.name);
          matches.push({
            name: officer.name,
            section: section.title,
            role: officer.role,
            image: student ? `photos/${section.id}/${student.image}` : 'photos/placeholder.jpg',
            label: `${officer.name} — ${officer.role}`
          });
        }
      }

      for (const student of section.students) {
        if (student.name.toLowerCase().includes(queryValue)) {
          matches.push({
            name: student.name,
            section: section.title,
            role: 'Student',
            image: `photos/${section.id}/${student.image}`,
            label: student.name
          });
        }
      }
    }

    return matches;
  });

  setQuery(value: string) {
    this.query.set(value);
  }
}
