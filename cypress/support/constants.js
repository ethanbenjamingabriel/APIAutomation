export const scriptrunner = {
    accessToken: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjFzbWVUTW5DRUpIb2p5aU1xUlgwViJ9.eyJodHRwczovL3NjcmlwdHJ1bm5lci5jb20vc3RvcmVfbnVtYmVyIjoic3VyZXNoLXN0b3JlIiwibmlja25hbWUiOiJzdXJlc2giLCJuYW1lIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyL2M2ODk2NzQ1YmZhMWIwNzVkMDVhMWU3NzNlMzAwZDc4P3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc3UucG5nIiwidXBkYXRlZF9hdCI6IjIwMjQtMDEtMjRUMTk6MDg6NTIuNjk5WiIsImVtYWlsIjoic3VyZXNoQHNjcmlwdC1ydW5uZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vc2NyaXB0LXJ1bm5lci51cy5hdXRoMC5jb20vIiwiYXVkIjoiY05lRzNtUjdlbER5TGxtWGxxRG1tSnlNbkZSaDhwbWUiLCJpYXQiOjE3MDYxOTA4ODcsImV4cCI6MTcwNjIyNjg4Nywic3ViIjoiYXV0aDB8NWY2MjQxYzcyOWI4M2YwMDZhMmNjY2IyIiwic2lkIjoidGcxUExEeTEzY2tPNzQxM2RZRkVnS19YTmtIaU5UcmciLCJub25jZSI6IlJFUm5lVzFrUTJsSU9FbzVkVFExU25KbVV5NW5ORTFPUmsxU1VuVXpVVEZCYUVzM1dFVjVUMEkwT0E9PSJ9.JQdyD-E09tFrYHmmTkDs0zkZpmQbSvXgaPt4OpiCNKXwm8gkLzEIc2SEzotZivuJxxv-mS9BSfhJjhChW_VWaqLjomVlLTE0f1R0870IgiOq8rzGfotzbLBAHK4n-5ThpyOtwG2oF6qf_Jge5YBh_6_QvLaMGvPiQK-s3ORyR4gLAaD4hg-U9uR5FiOwiJijEkHlLFvzidlS8gseOF4_DzGUVe5zUUqmkscRbHVitotCfCbjKaHiTJgdjx0NZX8o8DzkFeNeFYEyxJVveJZlOGGegTehiaDP49tlMUPbHCPsSszmDVmEK4lyi96cwZb8T2vjJwUizjxcq1bWqF1f7Q',
    baseUrl: 'https://api.staging.script-runner.com',

};

export function getTodaysDate() {
    const date = new Date();
    const year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + date;
    }

    const deliveryDate = `${year}-${month}-${day}`;
    return deliveryDate;
}