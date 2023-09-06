import { Card, themes, Button } from "staples-ui";
const GridCards = () => {
  return (
    <>
      <Button
        variant='primary'

        className="CustomClass"
        id="CustomID"
        label="This button has a custom aria label"
        // onClickHandler={function noRefCheck() {}}
      >
        Button Example
      </Button>
      <Card backgroundColor="light_green_1">
        <div>1</div>
      </Card>
      <Card backgroundColor="light_magenta_1">
        <div>1</div>
      </Card>
      <Card backgroundColor="light_blue">
        <div>1</div>
      </Card>
      <Card backgroundColor="light_yellow_1">
        <div>1</div>
      </Card>
      <Card backgroundColor="light_purple_1">
        <div>1</div>
      </Card>
    </>
  );
};

export default GridCards;
