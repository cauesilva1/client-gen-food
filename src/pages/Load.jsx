import React from "react";
import { useState, useEffect } from "react";
import "../stylePages/Load.css";

export default function Load() {

    const [url, setUrl] = useState("");

    useEffect(() => {
    const fullUrl = window.location.href;
    setUrl(fullUrl);
    

    //  Ou se você quiser apenas a parte de consulta da URL
    //  const query = window.location.search;
    //  setUrl(query);
  }, []);

  const getUrl = 'https://gen-food.vercel.app/callback#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6IldvQlRNSjlSRnFURUgySUciLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE3MjA5NzcxLCJpYXQiOjE3MTcyMDYxNzEsImlzcyI6Imh0dHBzOi8vYWF5bmJ6bHZidW9jYnlqYW1ycXEuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6Ijg3ODIyN2FlLTlmOWYtNGMyYy04NzdmLWM5MTdkNDIwZjM4NSIsImVtYWlsIjoiamFpbHNvbnA0MzdAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJnb29nbGUiLCJwcm92aWRlcnMiOlsiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJdUdXTVo1akUyLUtCek0wS1hKNVNzTjhsTUJQMFE2cjY1WlRiTGdnYi1BLXFKWnc9czk2LWMiLCJlbWFpbCI6ImphaWxzb25wNDM3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmdWxsX25hbWUiOiJKYWlsc29uIFBhaXZhIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwibmFtZSI6IkphaWxzb24gUGFpdmEiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJdUdXTVo1akUyLUtCek0wS1hKNVNzTjhsTUJQMFE2cjY1WlRiTGdnYi1BLXFKWnc9czk2LWMiLCJwcm92aWRlcl9pZCI6IjExMjA2OTI3NTk5NDQyOTA2MDkyMyIsInN1YiI6IjExMjA2OTI3NTk5NDQyOTA2MDkyMyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im9hdXRoIiwidGltZXN0YW1wIjoxNzE3MjA2MTcxfV0sInNlc3Npb25faWQiOiJlZDkyMWVjYS1jNzZjLTQ1ZGMtYTE1OC01M2IwNGM3NTBjZjEiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.xljEAXf3HX6P77TnCWmK8nkxLhcTipDpYRmj2y0SaxQ&expires_at=1717209771&expires_in=3600&provider_token=ya29.a0AXooCguIcSRfH3foVCL2KRcdiemmfXoElRQQ9JQpLrjIxIpAw-HCu5d9l2zKhgMlvI7l9S__ld6F6azdfoGB7C0rofSVsYGhB5RQslFYDmJhDmnwUKsvXaAIIb6VXtr0M6KwTBOpqRTmgBcCirNhfSOClH3Akq6ahgaCgYKAVcSARASFQHGX2MibHnhLHrbt0gvm_lcEJn7wA0169&refresh_token=LmNyKpNeieorXRwcbcoJTA&token_type=bearer' 

  const token = getUrl.slice()

    return (
      <div className="loadText">Loading...</div>
    )
}