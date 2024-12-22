import { FormControl2 } from '../components/form-builder2/form-builder2.component';

interface FormControls {
  [key: string]: FormControl2;
}
export function toggleFormControlsVisibility(controls: FormControls, keysToShow: string[]) {
  const controlsArr = Object.values(controls);

  for (let controlKey in controls) {
    // console.log(controlKey);

    if (keysToShow.includes(controlKey)) {
      // console.log('');

      controls[controlKey].show = true;
    } else {
      controls[controlKey].show = false;
    }
  }
  //  console.log(object);
  //   console.log(controlsArr);
  //   console.log({
  //     hideFrom,
  //     to,
  //   });
}
