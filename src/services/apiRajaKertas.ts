import { useQuery, useMutation } from "@tanstack/react-query";
import request from "@/helpers/request";
type method = "put" | "post" | "delete";

const getRequest = async (
  endpoint: string,
  params: Object
  //   response: NextApiResponse
) => {
  try {
    const { data: response } = await request.get(endpoint, { params });
    return response;
  } catch (error) {
    throw error;
    // throw error?.response?.data || {};
  }
};

const postRequest = async (
  endpoint: string,
  body: any,
  isFormData = false,
  method: method
) => {
  let payload = body;
  if (isFormData) {
    payload = new FormData();
    Object.keys(body).forEach((key: string) => {
      payload.append(key, body[key]);
    });
  }
  try {
    const { data: response } = await request[method](endpoint, payload);
    return response;
  } catch (error) {
    // throw error?.response?.data || {};
  }
};

export const getHero = () => getRequest(`/public/config-key/hero/`, {});
export const useGetHero = () =>
  useQuery({
    queryFn: getHero,
    queryKey: ["hero"],
  });

export const getTentangKami = () =>
  getRequest(`/public/config-key/TENTANG_KAMI/`, {});
export const useGetTentangKami = () =>
  useQuery({
    queryFn: getTentangKami,
    queryKey: ["tentangkami"],
  });

export const getKeunggulan = () =>
  getRequest(`/public/config-key/KEUNGGULAN/`, {});
export const useGetKeunggulan = () =>
  useQuery({
    queryFn: getKeunggulan,
    queryKey: ["keunggulan"],
  });

export const getFaq = () => getRequest(`/public/config-key/FAQ/`, {});
export const useGetFaq = () =>
  useQuery({
    queryFn: getFaq,
    queryKey: ["faq"],
  });

export const getHomeGallery = () => getRequest(`/home-gallery/`, {});
export const useGetHomeGallery = () =>
  useQuery({
    queryFn: getHomeGallery,
    queryKey: ["homegallery"],
  });

export const getProductList = () => getRequest(`/product-detail/`, {});
export const useGetProductList = () =>
  useQuery({
    queryFn: getProductList,
    queryKey: ["productlist"],
  });

export const getPartner = () => getRequest(`/our-partner/`, {});
export const useGetPartner = () =>
  useQuery({
    queryFn: getPartner,
    queryKey: ["partner"],
  });

export const getFooter = () => getRequest(`/public/config-key/Footer/`, {});
export const useGetFooter = () =>
  useQuery({
    queryFn: getFooter,
    queryKey: ["footer"],
  });

export const getLogoHitam = () => getRequest(`/public/config-key/Logo/`, {});
export const useGetLogoHitam = () =>
  useQuery({
    queryFn: getLogoHitam,
    queryKey: ["logohitam"],
  });

export const getMainProduct = () =>
  getRequest(`/public/config-key/mainproduct/`, {});
export const useGetMainProduct = () =>
  useQuery({
    queryFn: getMainProduct,
    queryKey: ["mainproduct"],
  });

export const getWhatsapp = () => getRequest(`/public/config-key/WHATSAPP/`, {});
export const useGetWhasapp = () =>
  useQuery({
    queryFn: getWhatsapp,
    queryKey: ["whatsapp"],
  });

export const getProductDetail = (params: any) =>
  getRequest(`/product-detail/${params}/`, {});
export const useGetProductDetail = (params: any) =>
  useQuery({
    queryFn: () => getProductDetail(params),
    queryKey: ["productdetail"],
  });

export const postContactUs = (body: any) =>
  postRequest(`/contact-us-form/`, body, false, "post");
export const usePostContactUs = () =>
  useMutation({ mutationFn: postContactUs, mutationKey: ["contact-us"] });
