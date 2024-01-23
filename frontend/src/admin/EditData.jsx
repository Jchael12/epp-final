import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const EditData = () => {
  const { id } = useParams();
  const { title, description } = useLoaderData();

  // function for handling image upload
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  //data submission
  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      const form = event.target;
      const title = form.title.value;
      const description = form.description.value;

      const updatedContentItems = {
        title,
        description,
      };

      //create new form data
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);
      // formData.append(
      //   "updatedContentItems",
      //   JSON.stringify(updatedContentItems),
      // );

      const response = await fetch(`http://localhost:5000/item/${id}`, {
        method: "PATCH",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        alert("Content is updated successfully!");
      } else {
        console.error("Error updating contents: ", response.statusText);
        alert("Failed to update contents");
      }
    } catch (error) {
      console.error("Error updating person info:", error);
      alert("Internal Server Error");
    }
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Content</h2>
      <form
        className="flex md:w-[900px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
      >
        {/* {first row} */}
        <div className="flex gap-8">
          {/* {title} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              autoComplete="off"
              type="text"
              name="title"
              placeholder="Title here"
              defaultValue={title}
              required
            />
          </div>
          {/* Image upload field */}
          <div className="lg:w-full">
            <div className="mb-2 block">
              <Label htmlFor="image" value="Update Image" />
            </div>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        {/* {second row} */}
        {/* {description} */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            type="text"
            name="description"
            placeholder="Write description here..."
            className="w-full "
            autoComplete="off"
            defaultValue={description}
            rows={6}
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-red-800 enabled:hover:bg-red-700"
        >
          Update Content
        </Button>
      </form>
    </div>
  );
};

export default EditData;
