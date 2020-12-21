import { NextPage } from "next";
import { Grid, Box } from "@chakra-ui/react";

import { Details } from "../lib/components/Details/Details";

const Index: NextPage = () => {
	return (
		<>
			<Grid gap={4}>
				<Box margin={["1rem", "2rem", "4rem", "8rem"]}>
					<Details />
				</Box>
			</Grid>
		</>
	);
};

export default Index;
