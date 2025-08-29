import React, { useState } from "react";
import videoLogo from "../assets/video.png";
import {
  Button,
  Card,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import axios from "axios";
import toast from "react-hot-toast";

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [meta, setMeta] = useState({ title: "", description: "" });
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");

  function handleFileChange(event) {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setFileName(event.target.files[0].name);
    } else {
      setSelectedFile(null);
      setFileName("No file chosen");
    }
  }

  function formFieldChange(event) {
    setMeta({
      ...meta,
      [event.target.name]: event.target.value,
    });
  }

  function handleForm(formEvent) {
    formEvent.preventDefault();

    if (!meta.title.trim()) {
      toast.error("Please enter a title!");
      return;
    }

    if (!meta.description.trim()) {
      toast.error("Please enter a description!");
      return;
    }

    if (!selectedFile) {
      toast.error("Please select a video file!");
      return;
    }

    saveVideoToServer(selectedFile, meta);
  }

  function resetForm() {
    setMeta({ title: "", description: "" });
    setSelectedFile(null);
    setFileName("No file chosen");
    setUploading(false);
  }

  async function saveVideoToServer(video, videoMetaData) {
    setUploading(true);
    try {
      let formData = new FormData();
      formData.append("title", videoMetaData.title);
      formData.append("description", videoMetaData.description);
      formData.append("File", selectedFile);

      await axios.post(
        `http://localhost:8080/api/v1/videos`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(progress);
          },
        }
      );

      setProgress(0);
      setUploading(false);
      toast.success("File uploaded successfully !!");
      resetForm();
    } catch (error) {
      console.log(error);
      setUploading(false);
      toast.error("File not uploaded !!");
    }
  }

  return (
    <div className="bg-transparent dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-xl font-semibold mb-4 text-center">Upload Memory</h1>

        <form noValidate className="flex flex-col space-y-6" onSubmit={handleForm}>
          {/* Title Field */}
          <div>
            <Label htmlFor="title" value="Memory Title" />
            <TextInput
              value={meta.title}
              onChange={formFieldChange}
              name="title"
              placeholder="Enter title"
            />
          </div>

          {/* Description Field */}
          <div>
            <Label htmlFor="description" value="Memory Description" />
            <Textarea
              value={meta.description}
              onChange={formFieldChange}
              name="description"
              placeholder="Write description..."
              required
              rows={4}
            />
          </div>

          {/* File Upload */}
          <div className="flex items-center space-x-5 justify-center">
            <img className="h-12 w-12 object-cover" src={videoLogo} alt="Upload Icon" />
            <div className="relative flex items-center space-x-4">
              <label
                htmlFor="file-upload"
                className="bg-gray-700 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
              >
                Choose File
              </label>
              <input
                id="file-upload"
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-white">{fileName}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full mt-4 min-h-[60px]">
            {uploading && (
              <>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">
                  Uploading... {progress}%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
                  <div
                    className="h-4 bg-green-500 transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={uploading}
              className="mb-6 px-6 py-2 bg-[#00C853] hover:bg-[#00B34A] text-white font-semibold rounded-full shadow"
            >
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default VideoUpload;
