import {About} from './about';

export class AboutService {

  getAboutInfo(): About {
    return ABOUT_INFO;
  }
}


const ABOUT_INFO: About = {
  title: 'About me',
  bio: 'Do your best',
  github: 'https://github.com/StupidL'
}
