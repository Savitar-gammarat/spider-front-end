<template>
	<div style="margin: 20px">
		<md-table md-card>
			<md-table-toolbar>
				<h1 class="md-title">Users</h1>
			</md-table-toolbar>
			
			<md-table-row>
				<md-table-head md-numeric>ID</md-table-head>
				<md-table-head>Name</md-table-head>
				<md-table-head>Email</md-table-head>
				<md-table-head>Gender</md-table-head>
				<md-table-head>Job Title</md-table-head>
				<md-table-head>领域</md-table-head>
			</md-table-row>
			
			<md-table-row v-for="i in 3">
				<md-table-cell md-numeric>1</md-table-cell>
				<md-table-cell>Shawna Dubbin</md-table-cell>
				<md-table-cell>sdubbin0@geocities.com</md-table-cell>
				<md-table-cell>Male</md-table-cell>
				<md-table-cell>Assistant Media Planner</md-table-cell>
				<md-table-cell>
					<div class="md-layout md-gutter">
						<div class="md-layout-item">
							<md-field>
								<label for="movies">Movies</label>
								<md-select v-model="selectedMovies" name="movies" id="movies" multiple>
									<md-option value="fight-club">Fight Club</md-option>
									<md-option value="godfather">Godfather</md-option>
									<md-option value="godfather-ii">Godfather II</md-option>
									<md-option value="godfather-iii">Godfather III</md-option>
									<md-option value="godfellas">Godfellas</md-option>
									<md-option value="pulp-fiction">Pulp Fiction</md-option>
									<md-option value="scarface">Scarface</md-option>
								</md-select>
							</md-field>
							
							<!--<div>-->
								<!--<strong>Selected movies:</strong>-->
								<!--{{ selectedMovies }}-->
							<!--</div>-->
						</div>
					</div>
				</md-table-cell>
			</md-table-row>
		</md-table>
	</div>
</template>

<script>
export default {
	name: "news-management",
	data: () => ({
		users: [
			{
				id: 1,
				name: 'Shawna Dubbin',
				email: 'sdubbin0@geocities.com',
				gender: 'Male',
				title: 'Assistant Media Planner'
			},
			{
				id: 2,
				name: 'Odette Demageard',
				email: 'odemageard1@spotify.com',
				gender: 'Female',
				title: 'Account Coordinator'
			},
			{
				id: 3,
				name: 'Lonnie Izkovitz',
				email: 'lizkovitz3@youtu.be',
				gender: 'Female',
				title: 'Operator'
			},
			{
				id: 4,
				name: 'Thatcher Stave',
				email: 'tstave4@reference.com',
				gender: 'Male',
				title: 'Software Test Engineer III'
			},
			{
				id: 5,
				name: 'Clarinda Marieton',
				email: 'cmarietonh@theatlantic.com',
				gender: 'Female',
				title: 'Paralegal'
			}
		],
		selectedMovies: []
	})
}
</script>

<style scoped>
.md-field {
	max-width: 200px;
}
</style>