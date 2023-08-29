export function handleClear(
    setTitle,
    setLink,
    setImage,
    setDescription,
    setCode,
    setErrors
  ) {
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
  }