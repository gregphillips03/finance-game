//testing out a lib for the backend

export async function fetchUserData() {
  try {
    let res = await fetch(
      '/user-data', 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})}
    );
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFactionData() {
  try {
    let res = await fetch(
      '/faction-data', 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTotalProgress(user) {
  try {
    let res = await fetch(
      '/progress?user=' + user, 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.total)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoreProgress(user) {
  try {
    let res = await fetch(
      '/progress?user=' + user, 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.more)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRedProgress(user) {
  try {
    let res = await fetch(
      '/progress?user=' + user, 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.red)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGreenProgress(user) {
  try {
    let res = await fetch(
      '/progress?user=' + user, 
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.green)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchFactionPercentage(faction){
  try{
    let res = await fetch(
      '/get-faction-percentage?faction=' + faction,
      {method: 'GET', 
       headers: new Headers({'Cache-Control': 'no-cache, no-store, must-revalidate'})
      }
    );
    let resJson = await res.json(); 
    resJson = resJson.map(item => item.percentage)
    return resJson; 
  } catch (error){
    console.error(error); 
  }
}

export async function addFactionPlay(data){ //data should be a key value pair
  try {
    await fetch(
      '/add-faction-play',
      {method: 'POST', 
       body: JSON.stringify(data), 
       headers: new Headers({'Content-Type': 'application/json'})
      }).then(res => res.json())
  } catch (error){
    console.error(error); 
  }
}