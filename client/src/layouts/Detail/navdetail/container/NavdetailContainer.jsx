import React from 'react'
import { NavdetailComment } from './navdetail_comment/NavdetailComment'
import { NavdetailHistory } from './navdetail_history/NavdetailHistory'
import { NavdetailTrend } from './navdetail_trend/NavdetailTrend'

export const NavdetailContainer = () => {
	return (
		<div className="mt-3 container">
			<div className="mt-4 row">
				<div className="col col-lg-8">
					<NavdetailTrend />
					<NavdetailComment />
				</div>
				<div className="col col-lg-4">
					<NavdetailHistory />
				</div>
			</div>
		</div>
	)
}
