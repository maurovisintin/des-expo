import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { SafeAreaView } from "react-native";
// import { AddProblemForm } from "./components/add-problem-form";

import { QueryClient, QueryClientProvider } from "react-query";

import { DisplayContent } from "./components/display-content";

const queryClient = new QueryClient();

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1 }}>
            {/* {isAddMode ? (
        <AddProblemForm showDisplayMode={() => setIsAddMode(false)} />
      ) : (
        
      )} */}
            <DisplayContent showInputMode={() => setIsAddMode(true)} />
          </SafeAreaView>
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  );
}
