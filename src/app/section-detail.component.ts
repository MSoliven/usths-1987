import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SectionData, sections, Student } from './models';

@Component({
  selector: 'app-section-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="page-shell" *ngIf="section()">
      <!-- Header Navigation -->
      <header class="header">
        <a routerLink="/" class="back-button">← Back to sections</a>
      </header>

      <!-- Cover Section -->
      <section class="cover-section">
        <!-- Cover header: Adviser and Class Photo -->
        <div class="cover-row">
          <div class="photo-item adviser-photo">
            <img [src]="advisePath()" [alt]="section()!.adviser.name" />
            <p class="caption">{{ section()!.adviser.name }} — Adviser</p>
          </div>

          <div class="photo-item class-photo">
            <img [src]="classPhotoPath()" [alt]="section()!.title + ' class photo'" />
            <p class="caption">{{ section()!.title }} — Class Photo</p>
          </div>
        </div>

        <!-- Section Title Divider -->
        <h2 class="section-title">{{ section()!.title }}</h2>

        <!-- Officers Row -->
        <div class="officers-row" *ngIf="section()!.officers.length > 0">
          <div class="officer-item" *ngFor="let officer of section()!.officers">
            <div class="photo-frame">
              <img [src]="getStudentPhoto(officer.name)" [alt]="officer.name" />
            </div>
            <p class="caption">{{ officer.shortName }} — {{ officer.role }}</p>
          </div>
        </div>
      </section>

      <!-- Students Grid Section -->
      <section class="students-section">
        <div class="students-header">
          <h3>Students</h3>
          <div class="pagination-info" *ngIf="totalPages() > 1">
            Page {{ currentPage() }} of {{ totalPages() }}
          </div>
        </div>

        <div class="students-grid">
          <div class="student-card" *ngFor="let student of visibleStudents()">
            <div class="photo-frame">
              <img [src]="studentPath(student.image)" [alt]="student.name" />
            </div>
            <p class="caption">{{ student.name }}</p>
          </div>
        </div>

        <!-- Pagination Controls -->
        <div class="pagination-controls" *ngIf="totalPages() > 1">
          <button
            class="page-button"
            [disabled]="currentPage() === 1"
            (click)="goToPage(currentPage() - 1)">
            ← Previous
          </button>

          <div class="page-numbers">
            <button
              class="page-button page-number"
              *ngFor="let page of pageNumbers()"
              [class.active]="page === currentPage()"
              (click)="goToPage(page)">
              {{ page }}
            </button>
          </div>

          <button
            class="page-button"
            [disabled]="currentPage() === totalPages()"
            (click)="goToPage(currentPage() + 1)">
            Next →
          </button>
        </div>
      </section>

      <!-- Other Photos Section -->
      <section class="other-section" *ngIf="section()!.other.length > 0">
        <h3>More memories</h3>
        <div class="other-grid">
          <div class="photo-item" *ngFor="let photo of section()!.other">
            <div class="photo-frame">
              <img [src]="otherPhotoPath(photo.image)" [alt]="photo.title" />
            </div>
            <p class="caption">{{ photo.title }}</p>
          </div>
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class SectionDetailComponent implements OnInit {
  section = signal<SectionData | null>(null);
  currentPage = signal(1);
  pageSize = 8; // Show 8 students per page

  visibleStudents = computed(() => {
    const students = this.section()?.students || [];
    const start = (this.currentPage() - 1) * this.pageSize;
    const end = start + this.pageSize;
    return students.slice(start, end);
  });

  totalPages = computed(() => {
    const totalStudents = this.section()?.students.length || 0;
    return Math.ceil(totalStudents / this.pageSize);
  });

  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages: number[] = [];

    // Show max 5 page numbers, centered around current page
    let start = Math.max(1, current - 2);
    let end = Math.min(total, current + 2);

    // Adjust if we're near the beginning or end
    if (end - start < 4) {
      if (start === 1) {
        end = Math.min(total, start + 4);
      } else if (end === total) {
        start = Math.max(1, end - 4);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const found = sections.find((s: SectionData) => s.id === id);
      this.section.set(found || null);
      this.currentPage.set(1); // Reset to first page when section changes
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  advisePath() {
    return `photos/${this.section()!.id}/${this.section()!.adviser.image}`;
  }

  classPhotoPath() {
    return `photos/${this.section()!.id}/${this.section()!.cover.classPhoto}`;
  }

  studentPath(image: string) {
    return `photos/${this.section()!.id}/${image}`;
  }

  otherPhotoPath(image: string) {
    return `photos/${this.section()!.id}/${image}`;
  }

  getStudentPhoto(name: string) {
    const student = this.section()!.students.find((s: Student) => s.name === name);
    return student ? this.studentPath(student.image) : 'photos/placeholder.jpg';
  }
}
