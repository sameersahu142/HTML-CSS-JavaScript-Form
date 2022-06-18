function myFunction() {
  event.preventDefault();
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let date_of_birth = document.getElementById("date_of_birth").value;
  let email = document.getElementById("email").value;
  let father_first_name = document.getElementById("father_first_name").value;
  let father_last_name = document.getElementById("father_last_name").value;
  let mother_first_name = document.getElementById("mother_first_name").value;
  let mother_last_name = document.getElementById("mother_last_name").value;
  let gender = document.getElementById("gender");
  let nationality = document.getElementById("nationality").value;
  let street_address = document.getElementById("street_address").value;
  let city = document.getElementById("city").value;
  let country = document.getElementById("country").value;
  let telephone_home = document.getElementById("telephone_home").value;
  let telephone_mobile = document.getElementById("telephone_mobile").value;
  let HSC_institution_name = document.getElementById(
    "HSC_institution_name"
  ).value;
  let HSC_board = document.getElementById("HSC_board").value;
  let HSC_score_in_percentage = document.getElementById(
    "HSC_score_in_percentage"
  ).value;
  let SSC_institution_name = document.getElementById(
    "SSC_institution_name"
  ).value;
  let SSC_board = document.getElementById("SSC_board").value;
  let SSC_score_in_percentage = document.getElementById(
    "SSC_score_in_percentage"
  ).value;
  let currently_pursuing = document.getElementById("currently_pursuing").value;
  let current_education = document.getElementById("current_education").value;
  let overall_percentage = document.getElementById("overall_percentage").value;
  let current_backlogs = document.getElementById("current_backlogs").value;
  let passport = document.getElementById("passport").value;
  let HSC_mark = document.getElementById("HSC_mark").value;
  let SSC_mark = document.getElementById("SSC_mark").value;
  let all_semesters_mark = document.getElementById("all_semesters_mark").value;

  gender.checked ? (gender = "M") : (gender = "F");

  localStorage.setItem("is_first_name", first_name);
  localStorage.setItem("is_last_name", last_name);
  localStorage.setItem("is_date_of_birth", date_of_birth);
  localStorage.setItem("is_email", email);
  localStorage.setItem("is_father_first_name", father_first_name);
  localStorage.setItem("is_father_last_name", father_last_name);
  localStorage.setItem("is_mother_first_name", mother_first_name);
  localStorage.setItem("is_mother_last_name", mother_last_name);
  localStorage.setItem("is_gender", gender);
  localStorage.setItem("is_nationality", nationality);
  localStorage.setItem("is_street_address", street_address);
  localStorage.setItem("is_city", city);
  localStorage.setItem("is_country", country);
  localStorage.setItem("is_telephone_home", telephone_home);
  localStorage.setItem("is_telephone_mobile", telephone_mobile);
  localStorage.setItem("is_HSC_institution_name", HSC_institution_name);
  localStorage.setItem("is_HSC_board", HSC_board);
  localStorage.setItem("is_HSC_score_in_percentage", HSC_score_in_percentage);
  localStorage.setItem("is_SSC_institution_name", SSC_institution_name);
  localStorage.setItem("is_SSC_board", SSC_board);
  localStorage.setItem("is_SSC_score_in_percentage", SSC_score_in_percentage);
  localStorage.setItem("is_currently_pursuing", currently_pursuing);
  localStorage.setItem("is_current_education", current_education);
  localStorage.setItem("is_overall_percentage", overall_percentage);
  localStorage.setItem("is_current_backlogs", current_backlogs);
  localStorage.setItem("is_passport", passport);
  localStorage.setItem("is_HSC_mark", HSC_mark);
  localStorage.setItem("is_SSC_mark", SSC_mark);
  localStorage.setItem("is_all_semesters_mark", all_semesters_mark);

  console.log(first_name);
  console.log(last_name);
  console.log(date_of_birth);
  console.log(email);
  console.log(father_first_name);
  console.log(father_last_name);
  console.log(mother_first_name);
  console.log(mother_last_name);
  console.log(gender);
  console.log(nationality);
  console.log(street_address);
  console.log(city);
  console.log(country);
  console.log(telephone_home);
  console.log(telephone_mobile);
  console.log(HSC_institution_name);
  console.log(HSC_board);
  console.log(HSC_score_in_percentage);
  console.log(SSC_institution_name);
  console.log(SSC_board);
  console.log(SSC_score_in_percentage);
  console.log(currently_pursuing);
  console.log(current_education);
  console.log(overall_percentage);
  console.log(current_backlogs);
  console.log(passport);
  console.log(HSC_mark);
  console.log(SSC_mark);
  console.log(all_semesters_mark);
}
