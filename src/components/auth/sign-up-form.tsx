import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "@components/ui/logo";
import { ImGoogle2, ImFacebook2 } from "react-icons/im";
import Link from "@components/ui/link";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import React from "react";
import { ShopifyData } from "@lib/shopify";
import Router, { useRouter } from "next/router";

export interface SignUpInputType {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

function onSubmit({ email, password, firstName, lastName }: SignUpInputType) {
  console.log(email, password, firstName, lastName, "data");

  async function createCustomer() {
    const query = `
    mutation {
      customerCreate(input:{email: "${email}", password: "${password}", firstName: "${firstName}", lastName:"${lastName}"}) {
        customerUserErrors {
          code
          field
          message
        }
        customer {
          id
          email
          firstName
          lastName
        }
      }
    }
	  `;

    const response = await ShopifyData(query);
    console.log(query);
    createCustomerAccessToken();

    console.log(response, "res");
  }

  async function createCustomerAccessToken() {
    const query = `
  

mutation customerAccessTokenCreate {
	customerAccessTokenCreate(input: {email: "${email}", password: "${password}"
		}) {
	  customerAccessToken {
		accessToken
    expiresAt

	  }
	  customerUserErrors {
    code
    field
		message
	  }
	}
  }
  
	  `;

    const response = await ShopifyData(query);
    console.log(query);

    console.log(response, "..");

    const customerAccessToken =
      response.data.customerAccessTokenCreate.customerAccessToken.accessToken;
   // console.log("customerAccessToken:", customerAccessToken);
  }

  createCustomer();

}

const SignUpForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputType>();

  return (
    <div className="py-5 px-5 sm:px-8 bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300">
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          {t("common:registration-helper")}{" "}
          <Link
            href={ROUTES.TERMS}
            className="text-body underline hover:no-underline focus:outline-none"
          >
            {t("common:text-terms")}
          </Link>{" "}
          &amp;{" "}
          <Link
            href={ROUTES.POLICY}
            className="text-body underline hover:no-underline focus:outline-none"
          >
            {t("common:text-policy")}
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-4">
          <Input
            labelKey="forms:label-first-name"
            type="text"
            variant="solid"
            {...register("firstName", {
              required: "forms:first-name-required",
            })}
            errorKey={errors.firstName?.message}
          />
          <Input
            labelKey="forms:label-last-name"
            type="text"
            variant="solid"
            {...register("lastName", {
              required: "forms:last-name-required",
            })}
            errorKey={errors.lastName?.message}
          />
          <Input
            labelKey="forms:label-email"
            type="email"
            variant="solid"
            {...register("email", {
              required: `${t("forms:email-required")}`,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: t("forms:email-error"),
              },
            })}
            errorKey={errors.email?.message}
          />

          <PasswordInput
            labelKey="forms:label-password"
            errorKey={errors.password?.message}
            {...register("password", {
              required: `${t("forms:password-required")}`,
            })}
          />
          <div className="relative">
            <Button
              type="submit"
              // loading={isLoading}
              // disabled={isLoading}
              className="h-11 md:h-12 w-full mt-1.5 bg-[#262626]"
            >
              {t("common:text-register")}
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-[#262626]">
          {t("common:text-or")}
        </span>
      </div>

      <div className="text-sm sm:text-base text-body text-center mt-5 mb-1">
        {t("common:text-have-account")}{" "}
        <button
          type="button"
          className="text-sm sm:text-base text-black underline font-bold hover:no-underline focus:outline-none"
        >
          {t("common:text-login")}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
