//testing out a lib for the backend

export async function fetchUserData() {
  try {
    let res = await fetch(
      '/user-data'
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
      '/faction-data'
    );
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(error);
  }
}