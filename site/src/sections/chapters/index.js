import React from "react";
import { AboutStyleWrapper } from "./about.style";
import { FlexCol, FlexRow , Title ,Button , Vector, Search ,Frame668 } from "./chapters.style";
import { Frame , Frame1032 , Label , Bar , content1  } from "./chapters.style";
const Mainabout = () => {
  return (
    <AboutStyleWrapper>
      <div className = "container-center-horizontal" >
        <div className = "chapters screen">
          <FlexRow>
            <Title> Chapters of the book </Title>
            <Button>
              <Label> Categories </Label>
              <Vector src = "vector.svg" />
            </Button>
            <Frame668 >
              <Frame1032 >
                <Search> search  </Search >
                < Frame src = " search.svg " / >
              </Frame1032 >
            </Frame668>
          </FlexRow >

          {/* Area of Content */}
          < FlexCol >
            <Bar content={content1} />
            <Bar content={content1} />
            <Bar content={content1} />


          </FlexCol>
        </div>
      </div>
    </AboutStyleWrapper>

  );
};

export default Mainabout;


{ /* < Frame670>
                        < Table button2Props = { table2Props.button2Props } />
                        < Table button2Props = { table1Props.button2Props } />
                        < Table button2Props = { table3Props.button2Props } />
                        < Table button2Props = ( table4Props.button2Props } />
                        < Table button2Props = { table5Props.button2Props } />
                        < Table2
                            button3Props = { table2Props2.button3Props }
                            button41Props = { table2Props2.button41Props }
                            button42Props = { table2Props2.button42Props }
                            button43Props = { table2Props2.button43Props }
                            button44Props = { table2Props2.button44Props }
                            button45Props = { table2Props2.button45Props }
                        />

                        <Frame6701>
                            < DiscussPatternsAnd>
                                {discussPatternsAnd}
                            </DiscussPatternsAnd>
                            < JoinLayer5default label = {joinLayer5defaultProps.label} / >
                        </Frame6701>
                    </Frame670>

                    <Card>
                        <Frame6681>
                            <Cta >
                                < MaterialSymbolspersonAdd src = " material - symbols - person" />
                                < Label1 > { label2 } </Label1 >
                            </Cta >
                            <Labe12> {labe13} </Labe12>
                        </Frame6681>
                        <Layer5DiscussWhite1 src = { layer5DiscussWhitel } / >
                    </Card > */ }