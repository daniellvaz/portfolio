import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";

import { usePostContacts } from "@/http/generated/contact/contact";

import { formSchema } from "./schema";
import type { ContactRequestData } from "@/http/generated/api.schemas";

import { Button } from "components/ui/form/button";
import { Input } from "@/components/ui/form/input";
import { Heading } from "@/components/typograph/heading";
import { Textarea } from "@/components/ui/form/text-area";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactRequestData>({
    resolver: zodResolver(formSchema),
  });

  const mutation = usePostContacts({
    mutation: {
      onSuccess() {
        reset();
        toast.success("Contato registrado com sucesso!");
      },
      onError(err) {
        toast.error(err.response?.data.error.message);
      },
    },
  });

  const onSubmit = async (data: ContactRequestData) => {
    await mutation.mutateAsync({
      data: {
        data,
      },
    });
  };

  return (
    <form
      className="w-full flex flex-col space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Heading>Entre em contato</Heading>
      <Input
        type="text"
        {...register("name")}
        placeholder="Nome completo"
        error={errors.name?.message}
      />
      <Input
        type="text"
        placeholder="Assunto"
        {...register("subject")}
        error={errors.subject?.message}
      />
      <Input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        type="text"
        placeholder="Telefone"
        {...register("phone")}
        error={errors.phone?.message}
      />

      <Textarea
        rows={5}
        {...register("message")}
        error={errors.message?.message}
      ></Textarea>

      <Button
        iconRight={PaperPlaneTiltIcon}
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        Enviar
      </Button>
    </form>
  );
}
