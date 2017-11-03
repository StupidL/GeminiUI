import {Donate} from './donate';

const MOCK_DONATE = {
  content: 'If you find my articles are helpful to you, please donate with Alipay',
  imgUrl: 'https://avatars3.githubusercontent.com/u/13462739?s=400&u=ccc3be7ec5ba649f313e394c2b01c09e6aec7c0d&v=4'
};


export class DonateService {

  getDonate(): Donate {
    return MOCK_DONATE;
  }
}
