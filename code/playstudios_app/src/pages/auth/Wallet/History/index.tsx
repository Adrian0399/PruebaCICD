import { useDispatch, useSelector } from "react-redux";
import PlayCard from "src/components/cards";
import EmptyPage from "src/components/empty-page";
import { RootState } from "src/store";

import EmptyStateImage from "assets/empty_state.svg";
import { useCallback, useEffect } from "react";
import { CardVariant } from "src/components/cards/variants";
import { getHistory, History } from "src/store/slices/historySlice";

import { Grid } from "@mui/material";
import Section from "src/components/section";
import { useNavigate } from "react-router-dom";
import { PATH_AUTH } from "src/router/paths";


//Create page Available
export default function HistoryPage() {
    const { history } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    //navigate react router dom
    const navigate = useNavigate();

    //call dispatch for get history in useEffect
    useEffect(() => {
        dispatch(getHistory() as any);
    }, [dispatch]);

    //useCallback redirect to detail page
    const selectCard = useCallback(() => {
        setTimeout(() => {
            navigate(PATH_AUTH.detailHistory);
        }, 500);
    }, []);

    return (
        <Section>

            {history?.history &&
                <Grid container spacing={2}>
                    {history?.history?.map((item: History, index: number) => {
                        return (
                            <Grid item key={item.id}>
                                <PlayCard
                                    variant={CardVariant.history}
                                    key={item.id}
                                    title={item.name}
                                    description={item.description}
                                    image={item.image}
                                    award={item.award}
                                    awardText={item.awardText}
                                    awardIcon={item.awardIcon}

                                    onClick={selectCard}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            }

            {!history?.history &&
                <EmptyPage image={EmptyStateImage} title="NO REWARDS" description="You have no rewards in your history yet.  Used or expired rewards will appear here." />
            }
        </Section>
    );
}