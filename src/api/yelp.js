import axios from 'axios';

//https://www.yelp.com/developers/v3/manage_app
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization : 'Bearer wuDUNTPUXq5PSGGgPmOKtvpLaEgyALD8_DfoF99D4oTbpG10qA8Ui-zbiI8-dAVJSR8upQd9yGMkp8IewZikc6Ef0jO_q1H07kx37THihmitWzCpNiTN-7h-1gmTXXYx'
  }
});
