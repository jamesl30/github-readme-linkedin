import axios from 'axios';
import _ from 'lodash';

class API {
  private protocol: string = process.env.API_PROTOCOL || 'https';
  private baseURL: string = process.env.VERCEL_URL || 'github-readme-linkedin.vercel.app';
  private root: string = process.env.API_ROOT || 'data';

  constructor() {
  }

  async getProfileData(username: string): Promise<any> {
    try {
      const URL = `${this.protocol}://${this.baseURL}/${this.root}?username=${username}`;
      const response = await axios.get(URL, {
        headers: this.getHeaders(),
      });

      if (response.data && _.get(response.data, 'result')) {
        return _.get(response.data, 'result');
      } else {
        throw new Error('No result in response');
      }
    } catch (error) {
      throw error;
    }
  }

  private getHeaders() {
    return {};
  }
}

export default new API();
