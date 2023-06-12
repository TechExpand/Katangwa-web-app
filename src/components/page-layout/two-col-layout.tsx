import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Header from 'components/header';
import Footer from 'components/footer';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import Container from 'components/container';
import { NoSsr } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Props = {
	overlayHeader?: boolean;
	children: ReactNode;
	sideBar: ReactNode;
	header: ReactNode;
};

const TwoColLayout = ({
	children,
	overlayHeader,
	sideBar: SideBar,
	header: SubHeader,
}: Props) => {
	const { pathname } = useRouter();
	const classes = useStyles();
	return (
		<Box component={'div'}>
			<NoSsr>
				<Box
					sx={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Header overlay={overlayHeader} />
					<Box
						sx={{ flex: 1, marginTop: pathname !== '/' ? '100px' : '0px' }}
						component={'main'}
					>
						<Container className={classes.container}>
							<Box className={classes.header}>{SubHeader}</Box>
							<Box className={classes.grid}>
								{SideBar}
								<Paper className={classes.children} elevation={0}>
									{children}
								</Paper>
							</Box>
						</Container>
					</Box>
					<Footer />
				</Box>
			</NoSsr>
		</Box>
	);
};

const useStyles = makeStyles((theme: any) => ({
	container: {
		padding: `${theme.spacing(6)}px 0px`,
	},
	grid: {
		display: 'flex',
		gap: theme.spacing(2),
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
		},
	},
	header: {
		marginBottom: theme.spacing(6),
	},
	sideBar: {
		padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
	},
	children: {
		padding: `${theme.spacing(5)}px ${theme.spacing(2)}px`,
		flex: 1,
	},
}));

export default TwoColLayout;
