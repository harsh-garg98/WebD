import React from 'react'

function Survey() {
    return (
        <div>
            <div style={{ padding: "10vh 30vh 10vh 30vh" }} class="bg-white">
                <form class="bg-light px-5 pt-3 pb-4 text-start">
                    <p class="h2">
                        A (in advance) very happy birthday to you! Please fill the below form to let your friends know about your preferences, likes and dislikes.
                    </p>
                    <div class="form-floating mb-3 mt-4">
                        <input type="text" class="form-control" id="floatingName" aria-describedby="nameHelp" placeholder="Name" />
                        <label for="floatingName" class="form-label">Name (Nickname will do too!)</label>
                        <div id="nameHelp" class="form-text"></div>
                    </div>
                    <div class="form-floating mb-3 mt-4">
                        <input type="text" class="form-control" id="floatingDate" aria-describedby="dateHelp" placeholder="Date Of Birth" />
                        <label for="floatingDate" class="form-label">Date of birth</label>
                        <div id="dateHelp" class="form-text"></div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
                        <label for="inputEmail" class="form-label">Email address</label>
                        <div id="emailHelp" class="form-text mt-2">
                            <span class="h6">We'll never share your email with anyone else.</span>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="inputColor" aria-describedby="colorHelp" placeholder="Favourite color" />
                        <label for="inputColor" class="form-label">What's your favourite color?</label>
                        <div id="colorHelp" class="form-text mt-2">
                            <span class="h6">We'll never share your favourite color with anyone, except your friends.</span>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="inputSport" aria-describedby="sportHelp" placeholder="Favourite sport" />
                        <label for="inputSport" class="form-label">What's your favourite sport, team(s) and player(s), if any?</label>
                        <div id="sportHelp" class="form-text mt-2">
                            <span class="h6">We'll never share your favourite sports with anyone, except your friends.</span>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="inputHobbies" aria-describedby="hobbiesHelp" placeholder="Favourite sport" />
                        <label for="inputHobbies" class="form-label">What are your hobbies?</label>
                        <div id="hobbiesHelp" class="form-text mt-2">
                            <span class="h6">We'll never share your hobbies with anyone, except your friends.</span>
                        </div>
                    </div>
                    <label for="radio_nsfw" class="form-label">Are you comfortable with NSFW stuff?</label>
                    <div id="radio_nsfw">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>
                    </div>
                    <div class="mt-2 d-grid gap-2 col-3 mx-auto">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div >
        </div>
    )
}

export default Survey