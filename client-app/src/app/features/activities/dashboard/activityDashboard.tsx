import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityDetails from "../details/activityDetails";
import ActivityForm from "../form/activityForm";
import ActivitiesList from "./activitiesList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
}
export default function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
  createOrEdit,
  deleteActivity,
}: Props) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivitiesList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        ></ActivitiesList>
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          ></ActivityDetails>
        )}
        {editMode && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
          ></ActivityForm>
        )}
      </Grid.Column>
    </Grid>
  );
}
