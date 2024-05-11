import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { SendMail } from "./actions";

export default function ModalContact({ setStateModal, StateModal }) {
  return (
    <Dialog
      open={StateModal}
      onOpenChange={(e) => {
        setStateModal(e);
      }}
    >
      <DialogContent className="sm:max-w-[60%] ">
        <DialogHeader>
          <DialogTitle>Información de contacto</DialogTitle>
          <DialogDescription>
            Por favor complete la siguiente información{" "}
          </DialogDescription>
        </DialogHeader>

        <div>
          <form
            action={async (formData) => {
              const response = await SendMail(formData);
              alert(response?.message || "");
              setStateModal(false);
            }}
          >
            <div className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <div className="mt-3">
                <label
                  htmlFor="NombreCompleto"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  Nombre Completo{" "}
                </label>
                <input
                  autoFocus
                  type="text"
                  name="NombreCompleto"
                  id="NombreCompleto"
                  required
                  placeholder="Por favor ingrese el nombre completo"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="NombreEmpresa"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  Nombre Empresa{" "}
                </label>
                <input
                  type="text"
                  name="NombreEmpresa"
                  id="NombreEmpresa"
                  required
                  placeholder="Por favor ingrese el nombre de la empresa"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="Celular"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  Celular{" "}
                </label>

                <PhoneInput
                  placeholder="Por favor ingresa tu número de celular"
                  defaultCountry="PE"
                  onChange={() => {
                    return;
                  }}
                  name="Celular"
                  id="Celular"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="Correo"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  Correo Electrónico{" "}
                </label>
                <input
                  type="email"
                  name="Correo"
                  id="Correo"
                  required
                  placeholder="Por favor ingrese el correo"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="DNI"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  RUC o DNI{" "}
                </label>
                <input
                  type="text"
                  name="DNI"
                  id="DNI"
                  required
                  placeholder="Por favor ingrese indentificación"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="DominioSugerido"
                  className="block mb-2 text-sm text-gray-800  "
                >
                  Dominio Sugerido
                </label>
                <input
                  type="text"
                  name="DominioSugerido"
                  id="DominioSugerido"
                  required
                  placeholder="Ejm: www.emocion.pe"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-[#0d1a2e]" type="submit">
                Enviar
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
