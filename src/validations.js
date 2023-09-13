function titleValidation(errors, title) {
  const emptyPattern = /^(\s*.{1,2}\s*)?$/;
  if (emptyPattern.test(title)) {
    return {
      ...errors,
      title: {
        error: true,
        message: "Ingrese al menos 3 caracteres",
      },
    };
  } else {
    return {
      ...errors,
      title: {
        error: false,
        message: "",
      },
    };
  }
}

function urlValdiation(errors, url) {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  if (pattern.test(url)) {
    return {
      ...errors,
      link: {
        error: false,
        message: "",
      },
    };
  } else {
    return {
      ...errors,
      link: {
        error: true,
        message: "Formato incorrecto, vuelva a intentar",
      },
    };
  }
}

function imageValidation(errors, url) {
  const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  if (pattern.test(url)) {
    return {
      ...errors,
      image: {
        error: false,
        message: "",
      },
    };
  } else {
    return {
      ...errors,
      image: {
        error: true,
        message: "Formato incorrecto, vuelva a intentar",
      },
    };
  }
}

function descriptionValidation(errors, description) {
  const emptyPattern = /^(\s*.{1,5}\s*)?$/;
  if (emptyPattern.test(description)) {
    return {
      ...errors,
      description: {
        error: true,
        message: "Ingrese al menos 5 caracteres",
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

function codeValidation(errors, code) {
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

const handleClearVideo = (
  setTitle,
  setLink,
  setImage,
  setDescription,
  setCode,
  setErrors
) => {
  setTitle("");
  setLink("");
  setImage("");
  setDescription("");
  setCode("");
  setErrors({
    title: { error: false, message: "" },
    link: { error: false, message: "" },
    image: { error: false, message: "" },
    description: { error: false, message: "" },
    code: { error: false, message: "" },
  });
};

const handleClearCategory = (
  setTitle,
  setDescription,
  setColor,
  setCode,
  setErrors
) => {
  setTitle("");
  setDescription("");
  setColor("#000000");
  setCode("");
  setErrors({
    title: { error: false, message: "" },
    description: { error: false, message: "" },
    code: { error: false, message: "" },
  });
};

export const validation = {
  titleValidation,
  descriptionValidation,
  urlValdiation,
  imageValidation,
  codeValidation,
  handleClearVideo,
  handleClearCategory
};
