---
Title: Crime Cases Analysis
Category: Analysis, Visualization, Tableau
Description: This project is part of my application process to The Data School Information Lab - Germany. After reviewing one my portfolio [Road Crash Analysis](https://nuki-susanti.github.io/data%20analysis/data%20science/machine%20learning/2023/01/10/road-crash-analysis.html), they decided to proceed to the final step. They provided me an already cleaned data to work with and asked me to analyze and build a dashboard out of it using Tableau. No coding work is needed.
Image: https://media.istockphoto.com/id/478821794/de/foto/skyline-von-los-angeles-skyline-architektur-urban-cityscape.jpg?s=2048x2048&w=is&k=20&c=hmVAqGbILJ8musEJa5jR__plpLMnVSToSscKNYwNdn4=
---

## **Motivation**

This project is part of my application process to The Data School Information Lab - Germany. After reviewing one my portfolio [Road Crash Analysis](https://nuki-susanti.github.io/data%20analysis/data%20science/machine%20learning/2023/01/10/road-crash-analysis.html), they decided to proceed to the final step. They provided me an already cleaned data to work with and asked me to analyze and build a dashboard out of it using Tableau. No coding work is needed.

To be honest, I was (always) a bit lost when deciding a layout or design of the dashboard. Then, it was out of nowhere that I came up with newspaper looking-like dashboard. I did enjoy the analysis that occupied my whole weekend, however, I definitely have to work harder in the design!

## **This is Image**

<img src="https://img.freepik.com/free-photo/azure-paint-flowing-water_23-2147798224.jpg?t=st=1724678463~exp=1724682063~hmac=2d1e875efbdd0e837d2e98d4c59ccf7b080ac370c27fba3853dc57df6d6ee5e5&w=1380">
<em>Inspecting page element</em>

## **This is Another Image**

<img src="https://media.istockphoto.com/id/478821794/de/foto/skyline-von-los-angeles-skyline-architektur-urban-cityscape.jpg?s=2048x2048&w=is&k=20&c=hmVAqGbILJ8musEJa5jR__plpLMnVSToSscKNYwNdn4=">
<em>Inspecting page element</em>

## **Delivery Package**

- You can find the Tableau dashboard [here](https://public.tableau.com/app/profile/nuki.susanti/viz/CrimeCasesAnalysis-LosAngelesCA/CrimeAnalysis-LosAngelesCA).
- In addition to 5-min presentation of this dashboard, I also wrote the analysis on [Medium](https://medium.com/@nukisusanti/crime-cases-analysis-los-angeles-california-e58d4740097f).

This is code part.

```python
# File: db.py
def showing_course(department):
    with create_server_connection() as con:

        if department != None:
            sql_script = "SELECT dept_id, course_id, course_name, hour FROM courses WHERE dept_id = %s;"
            return query(con, sql_script, data=(department, ), fetch=True)
        else:
            sql_script = "SELECT * FROM courses;"
            return query(con, sql_script, fetch=True)
```

Connect with me! [Linkedin](https://www.linkedin.com/in/nukilsusanti/)
