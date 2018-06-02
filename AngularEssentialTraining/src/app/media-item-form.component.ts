import {Component, Inject} from "@angular/core";
// import {FormGroup, FormControl, Validators} from "@angular/forms";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {MediaItemService} from "./media-item.service";
import {lookupListToken} from "./providers";

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})


export class MediaItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router
  ){}


  // ngOnInit() {
  //   this.form = new FormGroup({
  //     medium: new FormControl('Movies'),
  //     name: new FormControl('', Validators.compose([
  //       Validators.required,
  //       Validators.pattern('[\\w\\-\\s\\/]+')
  //     ])),
  //     category: new FormControl(''),
  //     year: new FormControl('', this.yearValidator),
  //   });
  // }
  //

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
              Validators.required,
              Validators.pattern("[\\w\\-\\s\\/]+")
            ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    });
  }

  yearValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 1900;
    let maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: {
          'min': minYear,
          'max': maxYear
        }
      };
      // return {'year': true};
    }
  }

  onSubmit(mediaItem) {
    this.mediaItemService.add(mediaItem).subscribe(() => {
       this.router.navigate(["/",  mediaItem.medium]);
    });
  }
}
