import { instance } from "./http";

class OurService {
  registration = async params => {
    if (params.role === "SITTER") {
      params = {
        firstName: params.firstName,
        lastName: params.lastName,
        role: params.role,
        password: params.password,
        email: params.email,
        address: {
          city: params.city,
          location: params.location
        },
        card: {
          number: params.number,
          exp_month: params.month,
          exp_year: params.year,
          cvc: params.cvc
        },
        additional: {
          dogSize: params.dogSizes,
          services: params.services,
          salary: params.salary
        }
      };
    } else {
      params = {
        firstName: params.firstName,
        lastName: params.lastName,
        role: params.role,
        password: params.password,
        email: params.email,
        address: {
          city: params.city,
          location: params.location
        },
        card: {
          number: params.number,
          exp_month: params.month,
          exp_year: params.year,
          cvc: params.cvc
        }
      };
    }
    try {
      const answer = await instance.post(`/auth/registration/customer`, params);
      return answer.data;
    } catch (error) {
      throw error;
    }
  };
}

export default new OurService();
