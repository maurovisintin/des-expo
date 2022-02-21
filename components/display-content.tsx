import React, { useState } from "react";

import { ScrollView } from "react-native";
import { Layout, Text, Button, Icon } from "@ui-kitten/components";

import { useQuery } from "react-query";

import { grades, valueLabelFormat, getLabelFromValue } from "../utils/grades";
import { ProblemListItem } from "./problem-list-item";
import { getAllProblems } from "../utils/api";

type Props = {
  showInputMode: () => void;
};

export const DisplayContent = ({ showInputMode }: Props) => {
  const [gradeFilter, setGradeFilter] = useState([15, 50]);

  const { data, isLoading, error } = useQuery("problems", getAllProblems);

  function valuetext(value: number) {
    return `${value}`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setGradeFilter(newValue as number[]);
  };

  const filteredProblems = data?.filter(
    (problem) =>
      problem?.grade >= gradeFilter[0] && problem?.grade <= gradeFilter[1]
  );

  const renderSlider = () => {
    return (
      <div className="container mx-auto px-12 py-4">
        <p className="center text-center w-full text-xl py-4 font-bold">
          {`GRADE: ${getLabelFromValue(gradeFilter[0])} - ${getLabelFromValue(
            gradeFilter[1]
          )}`}
        </p>
        <Slider
          getAriaLabel={() => "Grades range"}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={5}
          value={gradeFilter}
          onChange={handleChange}
          valueLabelDisplay="auto"
          marks={grades.filter((x, i) => i % 3 === 0)}
        />
      </div>
    );
  };

  const BrushIcon = (props) => <Icon {...props} name="brush-outline" />;

  return (
    <Layout style={{ padding: 24, flex: 1 }}>
      <Text style={{ textAlign: "center", marginBottom: 20 }} category="h4">
        DEŠ Spray Wall Boulders
      </Text>
      {/* {renderSlider()} */}
      <ScrollView style={{}}>
        {data &&
          data.map((problem) => (
            <ProblemListItem key={problem.id} data={problem} />
          ))}
      </ScrollView>
      <Button
        status="danger"
        accessoryLeft={BrushIcon}
        onPress={() => showInputMode()}
        style={{
          width: 50,
          borderRadius: 25,
          height: 50,
          position: "absolute",
          bottom: 16,
          right: 16,
        }}
      />
    </Layout>
  );
};
