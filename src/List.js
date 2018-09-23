import React, { Component } from 'react';
// Example: Jane Cruz's favorite movie is Planet Earth 1.

class List extends Component {
  
  render() {
    const { profiles, users, movies} = this.props;

    return(
		<ul> 
      	{
			profiles.map(profile => 
          		(
				<li key={profile.id}>
                  <div>
      				
      					{
                          users.find(user => {
                          	// == comparator because user.id is number and profile.userID is string :_(
                            // Alternative: return user.id == profile.userID
                         	return user.id === Number(profile.userID)
  							}).name
						}
						`'s favorite movie is`
						{movies.find(movie => (movie.id === Number(profile.favoriteMovieID))).name}
					
                  </div>
				</li> 
          		)
			)
		}
		</ul>
    )
  }
}

export default List;