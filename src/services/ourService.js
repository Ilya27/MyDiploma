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

  login = async params => {
    try {
      const answer = await instance.post(`/auth/authorize`, params);
      return answer.data;
    } catch (error) {
      throw error;
    }
  };

  logout = async () => {
    try {
      const answer = await instance.delete("/auth/logout");
      return answer.data;
    } catch (error) {
      throw error;
    }
  };

  checkEmail = async email => {
    try {
      const answer = await instance.get("/auth/check-email", { email: email });
      return answer.data;
    } catch (error) {
      throw error;
    }
  };
}

export default new OurService();
