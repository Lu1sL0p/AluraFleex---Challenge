export function descriptionValidation(errors, description) {
  const emptyPattern = /^(\s*.{1,19}\s*)?$/;
  if (emptyPattern.test(description)) {
    return {
      ...errors,
      description: {
        error: true,
        message: "Ingrese al menos 20 caracteres",
      },
    };
  } else {
    return {
      ...errors,
      description: {
        error: false,
        message: "",
      },
    };
  }
}

export function codeValidation(errors, code) {
  const pattern = /^\d{1,7}$/;
  if (!pattern.test(code)) {
    return {
      ...errors,
      code: {
        error: false,
        message: "",
      },
    };
  } else {
    return {
      ...errors,
      code: {
        error: true,
        message: "Al menos 8 digitos",
      },
    };
  }
}
