function convert_time(time) {
    let now = new Date();
    let prev = new Date(time);

    let diff = now - prev;

    let sec_passed = diff / 1000;
    let min_passed = sec_passed / 60;
    let hrs_passed = min_passed / 60;
    let days_passed = hrs_passed / 24;

    let chosen;

    if (sec_passed < 60) {
        chosen = [sec_passed.toFixed(0), 'second'];
    }

    else if (min_passed < 60) {
        chosen = [min_passed.toFixed(0), 'minute']
    }

    else if (hrs_passed < 24) {
        chosen = [hrs_passed.toFixed(0), 'hour']
    }

    else {
        chosen = [days_passed.toFixed(0), 'day']
    }

    let addition = '';

    if (chosen[0] > 1) {
        addition = 's';
    }

    return chosen[0].toString() + ' ' + chosen[1] + addition + ' ' + 'ago';
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function get_request(url) {
    let response;

    $.ajax({
        url: url,
        data: {},
        async: false,
        type: 'GET',
        success: function (data) {
            response = data;
        }
    });

    return response;
}


function get_latest_commit() {
    let response = get_request('https://api.github.com/users/jieggii/events/public');

    for (let i = 0; i < response.length; i++) {
        if (response[i]['type'] === 'PushEvent') {
            let event = response[i];
            let payload = event['payload'];
            let commit = payload['commits'][0];
            let repo = event['repo']['name'];

            return {
                date: convert_time(event['created_at']),
                commit: {
                    url: 'https://github.com/' + repo + '/commit/' + commit['sha'],
                    message: commit['message']
                },
                repo: {
                    name: repo,
                    url: 'https://github.com/' + repo
                }
            };
        }
    }
}


function get_latest_follower(followers_count) {
    let response = get_request('https://api.github.com/users/jieggii/followers?per_page=1&page=' + followers_count.toString())[0];

    return {
        username: response['login'],
        avatar: response['avatar_url'],
        url: response['html_url'],
        id: followers_count
    }
}

function get_latest_repo() {
    let response = get_request('https://api.github.com/users/jieggii/repos?sort=created&per_page=1')[0];
    return {
        date: convert_time(response['created_at']),
        url: response['html_url'],
        name: response['full_name'],
        lang: response['language'],
        desc: response['description']
    }
}

function get_latest_star() {
    let response = get_request('https://api.github.com/users/jieggii/starred?sort=created')[0];

    return {
        name: response['full_name'],
        url: response['html_url'],
        lang: response['language'],
        desc: response['description']
    }
}

function get_all_repos() {
    return get_request('https://api.github.com/users/jieggii/repos?per_page=200').sort(function (a, b) {
        return a.stargazers_count > b.stargazers_count ? -1 : 1
    });
}

function get_latest_pull() {
    let response =  get_request('https://api.github.com/search/issues?q=author:jieggii+type:pr&sort=updated')['items'];

    if (response.length !== 0) {
        let pull = response[0];
        let state = pull.state;

        if (state === 'open') {
            state = 'Opened'
        }

        else {
            state = 'Closed'
        }

        return {
            date: convert_time(pull.created_at),
            title: pull.title,
            url: pull.html_url,
            state: state
        }
    }

    else {
        return {
            date: 0,
            title: 'None',
            url: '#'
        }
    }
}


function get_latest_issue() {
    let response = get_request('https://api.github.com/search/issues?q=author:jieggii+type:issue&sort=updated')['items'];

    if (response.length !== 0) {
        let issue = response[0];
        let state = issue.state;

        if (state === 'open') {
            state = 'Opened'
        }

        else {
            state = 'Closed'
        }

        return {
            date: convert_time(issue.created_at),
            title: issue.title,
            url: issue.html_url,
            state: state
        }
    }

    else {
        return {
            date: 0,
            title: 'None',
            url: '#'
        }
    }
}