# From an edit to a hand-in

Walked on 2026-09-19 against the running system.

**Which surface each step was on.** The editing, building and reading steps ran
on a copy — `qtm285-book`'s source tree cloned to its own project, course,
assignment and student, on the same code, server and build executor, so nothing
here wrote to the class. **The class site shown under *Students see it* is the
real one, `qtm285.github.io`, read and not written.**

Every number here was measured on that walk. Every screen is a capture of the
surface named in its beat.

---

## His loop

### He edits a chapter

**On screen.** The chapter source in his editor, on disk, in the course repo.

**What he does.** Adds a sentence to `chapters/chapter-sampling.qmd`.

    @@ -37,2 +37,4 @@ We'll run three surveys, each about a different pair.

    +The population never changes between surveys; only the pair being asked about does.
    +
     - Survey 1: `r A1` or `r B1`

**What changes.** One file on disk. Nothing else yet.

---

### It builds

**On screen.** The terminal, briefly, then nothing to watch.

**What he does.** Nothing further. The push is the whole action.

    $ tlda project push
    Source submitted.

      push returned              4 seconds
      rebuild settled           79 seconds

**What changes.** The submitted revision becomes the built book. Seventy-nine
seconds from a saved file to a rebuilt chapter. The first build of a project is
a cold full render and takes minutes; this is the loop he is actually in.

---

### He sees it

**On screen.** The rebuilt chapter on the copy, the new sentence in place, the R
code around it evaluated — `rainbow straws` and `pickle roulette` are computed
values, not typed ones.

![The rebuilt chapter, on the copy](img/03-chapter-built.png)

**What changes.** The sentence he typed is in the book, in position, rendered.

**Space.** Same chapter, same scroll position he was reading.

---

## The class side

### Students see it

**On screen.** His class site, `qtm285.github.io` — title, the figure, the
description, and the two doors in: **book** and **app**.

![His class site, as it stands today](img/05-students-see.png)

**What they do.** Click through to a chapter, or download the homework zip —
every chapter, homework page and handout archive on it opens.

**Space.** New frame. The first screen seen from the student's side.

---

### They hand in

**On screen.** Positron, the editor the class works in. **View → Command
Palette → Homework: Submit.**

**What happens.** The command reads the server and assignment out of the
homework's own front matter, zips the assignment folder, and posts it.

    SERVER ACCEPTED
      assignment      walk-calibration
      student         walk-student
      answers parsed  13
      build           success, 22 seconds later

**What changes.** Their work becomes a rendered document on the server, keyed to
the thirteen answer blocks they filled in. No upload page, no attachment, no
email.

---

## What this page is

An acceptance test with pictures. Each step above was performed on the date
given, not described.

<!-- ========================= HELD, NOT PUBLISHED =========================

     The three beats below are cut from the page until they are true. Each is
     blocked on something that is not mine. Keep them here; do not render them.

     BEAT — IT PUBLISHES  (between "He sees it" and "Students see it")
     Held for Skip's ruling on which definition of his book the official path
     should publish. What I first wrote — "publishing is a consequence of the
     build" — is FALSE: there is no path from a render to his site except a
     person deciding to push; `qtm285.github.io/static/book/` is a wholesale
     copytree of `_book` committed into a Pages repo by hand. The 33 pages /
     6 decks I had here were my copy's BUILD, not a publication — the stage
     error I retracted. `tlda project publish` exists and has never been
     pointed at his class site; pointing it there today would send 20 html
     against the 37 live.

     BEAT — HE MARKS
     The marking screen must be the solution chapter in the ordinary flow:
     solution full width, the student's answer in the margin, buttons in the
     header (Skip, 15:19). My capture was ?workspace=classroom-problems — the
     standalone mode he killed — with no solution callout, no answer and no
     margin; deleted rather than re-captioned. Blocked on the marking geometry,
     and the image must contain a visible mark.

     BEAT — THEY GET IT BACK
     Marks DO reach the student: verified 2026-09-19 as Walk Student on their
     own credential, same shape id as the draft room, header "Returned". But
     the stroke lands in empty canvas away from the work, so "the marks appear
     on your answer" is not true; and there is no Return control on the serving
     build, so a beat showing him pressing it would picture an affordance that
     does not exist. Delivery is real; the control is not.

     `returned at <timestamp>` is NEVER evidence of delivery — Return without a
     problem id skips the layer copy, still marks it returned, still answers
     200.
     ===================================================================== -->
