import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.less']
})
export class CareerPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  private _isJobOpen = false;
  get isJobOpen(): boolean {
    return this._isJobOpen;
  }
  set isJobOpen(value: boolean) {
    this._isJobOpen = value;
    document.body.style.overflow = value ? "hidden" : "";
  }
  onJobClick(event: MouseEvent) {
    this.isJobOpen = !this.isJobOpen;
  }
  sideJobForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    currentCompany: new FormControl('', Validators.required),
    currentDesignation: new FormControl('', Validators.required),
    resume: new FormControl(File, Validators.required),
  });
  sideFormSubmitted = false;

  restrictNonNumeric(event: KeyboardEvent) {
    const regex = /[0-9]/;
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

  fileLabel: string = "Resume Attachment";
  resumeFile(e: Event) {
    const resumeEle = e.currentTarget as HTMLInputElement;
    const fileList: FileList | null = resumeEle.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const allowedTypes = [
        'application/pdf',
        'application/msword', // .doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // .docx
      ];

      if (!allowedTypes.includes(file.type)) {
        this.sideJobForm.get('resume').setErrors({ invalidType: true });
        this.fileLabel = "Resume Attachment";

        return;
      }

      this.fileLabel = file.name;
      // console.log('File Uploaded:', file);
    }
  }

  onSideSubmit() {
    this.sideFormSubmitted = true;

    if (this.sideJobForm.invalid) {
      return;
    }
  }
}
