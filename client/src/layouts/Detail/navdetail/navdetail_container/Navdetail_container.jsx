import React from 'react'
import { Navdetail_comment } from './navdetail_comment/Navdetail_comment'
import { Navdetail_history } from './navdetail_history/Navdetail_history'
import { Navdetail_trend } from './navdetail_trend/Navdetail_trend'


export const Navdetail_container = () => {
	return (
		<div>
			<div class="mt-3 container">
				<div class="mt-4 row">
					<div class="col col-lg-8">
						<Navdetail_trend />
						<Navdetail_comment />
					</div>
					<div class="col col-lg-4">
						<Navdetail_history />
					</div>
				</div>
			</div>
		</div>
	)
}
