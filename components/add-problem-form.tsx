import React, { useState } from "react";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";

import { ImageEditor } from "./image-editor";
import { grades } from "../utils/grades";

// https://github.com/YanYuanFE/react-native-signature-canvas

type Props = {
  showDisplayMode: () => void;
};

export const AddProblemForm = ({ showDisplayMode }: Props) => {
  //const addProblemMutation = trpc.useMutation(["add-problem"]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [grade, setGrade] = useState(10);

  const handleInputGradeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrade(parseInt(event.target.value));
  };

  const addProblem = () => {
    // addProblemMutation.mutate({
    //   name: name,
    //   imageUrl: imageUrl,
    //   description: description,
    //   grade: grade,
    // });

    setName("");
    setDescription("");
    setImageUrl("");
    setGrade(10);
  };

  return (
    <Layout style={{ padding: 24, flex: 1 }}>
      <Text style={{ textAlign: "center", marginBottom: 20 }} category="h4">
        New boulder problem
      </Text>
      <ImageEditor />
      <Button
        status="info"
        appearance="ghost"
        accessoryLeft={(props) => <Icon {...props} name="close-outline" />}
        onPress={showDisplayMode}
        style={{
          position: "absolute",
          top: 16,
        }}
      />
    </Layout>
    // <div>
    //   <h1 className="center text-center w-full text-2xl pt-12 font-bold">
    //     Add a new boulder problem
    //   </h1>
    //   <div className="center text-center pt-12">
    //     <Box
    //       component="form"
    //       sx={{
    //         "& > :not(style)": { m: 1, width: "25ch" },
    //       }}
    //       noValidate
    //       autoComplete="off"
    //     >
    //       <TextField
    //         id="outlined-basic"
    //         label="Name"
    //         value={name}
    //         variant="outlined"
    //         onChange={(e) => setName(e.target.value)}
    //         error={!name || name.length < 3}
    //       />
    //       <TextField
    //         id="outlined-basic"
    //         label="Description"
    //         value={description}
    //         variant="outlined"
    //         multiline
    //         onChange={(e) => setDescription(e.target.value)}
    //       />
    //       <TextField
    //         id="outlined-basic"
    //         label="ImageURL"
    //         value={imageUrl}
    //         variant="outlined"
    //         onChange={(e) => setImageUrl(e.target.value)}
    //         error={!imageUrl || imageUrl.length < 3}
    //       />
    //       <TextField
    //         id="outlined-select-currency"
    //         select
    //         label="Pick a Grade"
    //         value={grade}
    //         onChange={handleInputGradeChange}
    //         helperText="Please select a grade"
    //       >
    //         {grades.map((option) => (
    //           <MenuItem key={option.value} value={option.value}>
    //             {option.label}
    //           </MenuItem>
    //         ))}
    //       </TextField>
    //       <LoadingButton
    //         disabled={!name || !description || !imageUrl}
    //         onClick={addProblem}
    //         loading={addProblemMutation.isLoading}
    //         variant="contained"
    //         color="primary"
    //       >
    //         Add problem
    //       </LoadingButton>
    //       <Button onClick={showDisplayMode}>Go Back</Button>
    //     </Box>
    //   </div>
    // </div>
  );
};
