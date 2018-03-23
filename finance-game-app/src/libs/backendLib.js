//testing out a lib for the backend

export async function fetchUserData() {
  try {
    let res = await fetch(
      '/user-data', 
      {method: 'GET'}
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
      {method: 'GET'}
    );
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTotalProgress() {
  try {
    let res = await fetch(
      '/progress', 
      {method: 'GET'}
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.total)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMoreProgress() {
  try {
    let res = await fetch(
      '/progress', 
      {method: 'GET'}
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.more)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchRedProgress() {
  try {
    let res = await fetch(
      '/progress', 
      {method: 'GET'}
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.red)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchGreenProgress() {
  try {
    let res = await fetch(
      '/progress', 
      {method: 'GET'}
    );
    let resJson = await res.json();
    resJson = resJson.map(item => item.green)
    return resJson;
  } catch (error) {
    console.error(error);
  }
}